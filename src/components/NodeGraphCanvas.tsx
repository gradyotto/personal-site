import { useEffect, useRef } from "react";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

const NodeGraphCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const nodesRef = useRef<Node[]>([]);
  const animRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      const parent = canvas.parentElement;
      canvas.width = window.innerWidth;
      canvas.height = parent ? parent.scrollHeight : document.body.scrollHeight;
    };
    resize();
    const resizeTimer = setTimeout(resize, 500);
    window.addEventListener("resize", resize);

    const count = Math.floor((window.innerWidth * window.innerHeight) / 11000);
    nodesRef.current = Array.from({ length: count }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
    }));

    const handleMouse = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY + window.scrollY };
    };
    window.addEventListener("mousemove", handleMouse);

    const connectionDist = 140;
    const mouseDist = 200;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const nodes = nodesRef.current;
      const mouse = mouseRef.current;

      for (const node of nodes) {
        node.x += node.vx;
        node.y += node.vy;
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;
      }

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < connectionDist) {
            const baseOpacity = (1 - dist / connectionDist) * 0.45;
            const midX = (nodes[i].x + nodes[j].x) / 2;
            const midY = (nodes[i].y + nodes[j].y) / 2;
            const mDist = Math.sqrt((midX - mouse.x) ** 2 + (midY - mouse.y) ** 2);
            if (mDist < mouseDist) {
              const boost = (1 - mDist / mouseDist) * 0.25;
              ctx.strokeStyle = `hsla(24, 95%, 53%, ${baseOpacity + boost})`;
              ctx.lineWidth = 0.8;
            } else {
              ctx.strokeStyle = `rgba(70, 75, 85, ${baseOpacity + 0.12})`;
              ctx.lineWidth = 0.5;
            }
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      for (const node of nodes) {
        const mdx = node.x - mouse.x;
        const mdy = node.y - mouse.y;
        const mDist = Math.sqrt(mdx * mdx + mdy * mdy);
        const isNearMouse = mDist < mouseDist;

        ctx.fillStyle = isNearMouse
          ? `hsla(24, 95%, 53%, ${0.45 * (1 - mDist / mouseDist) + 0.15})`
          : "rgba(50, 55, 65, 0.5)";
        ctx.beginPath();
        ctx.arc(node.x, node.y, isNearMouse ? 2.5 : 1.5, 0, Math.PI * 2);
        ctx.fill();
      }

      animRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      clearTimeout(resizeTimer);
      cancelAnimationFrame(animRef.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouse);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none w-full h-full"
      style={{ zIndex: 0 }}
    />
  );
};

export default NodeGraphCanvas;
