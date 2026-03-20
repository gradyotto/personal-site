# Lessons from the Machine Shop Floor

What six months of running CNC machines taught me about feedback loops, tolerances, and building things that matter.

## Getting My Hands Dirty

I spent six months working in a machine shop. Not observing—working. Running a Haas VF-2, programming toolpaths, breaking endmills, and learning what it actually means to hold a tolerance of ±0.001".

The experience fundamentally changed how I think about building things.

## Feedback Loops Are Everything

In software, feedback loops are measured in milliseconds. You write code, run it, see the result. If it breaks, you revert. The cost of failure is nearly zero.

In machining, the feedback loop is physical. You hear the cut before you see it. A change in pitch means your tool is wearing. A vibration pattern means your workholding isn't rigid enough. And if you ignore these signals, the cost isn't a stack trace—it's a scrapped part, a broken tool, or worse.

This taught me something that software engineering never did: **respect the feedback loop, because you can't undo physics.**

## Tolerances Teach Humility

When someone says "close enough" in software, they usually mean it works. When a machinist says "close enough," they mean it's within spec—and spec is measured in thousandths of an inch.

Working to tight tolerances teaches you that precision isn't perfectionism. It's the difference between parts that assemble and parts that don't. Between machines that run and machines that seize.

## The Knowledge Problem

The most striking thing about the shop floor was how much critical knowledge lived in people's heads. Setup procedures, optimal speeds and feeds for specific material lots, workarounds for machine quirks—none of it was documented in any system I could find.

When a senior machinist retires, decades of optimization disappear with them.

This is the knowledge problem that keeps me up at night. Not because it's unsolvable, but because the solution is obvious and nobody is building it at scale.

## What Software People Get Wrong

Software engineers who visit factories tend to see inefficiency and assume the solution is a dashboard. It's not. The operators don't need more data visualization. They need their expertise captured, augmented, and made transferable.

The interface isn't the product. The knowledge layer is.

## What I Took Back

I went back to my desk with grease under my fingernails and a different perspective on building. Every system I design now, I ask: what's the feedback loop? What's the tolerance? What knowledge am I assuming that isn't written down?

These questions make better software. They also make better companies.
