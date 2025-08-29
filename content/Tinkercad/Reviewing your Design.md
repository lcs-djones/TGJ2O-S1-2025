---
created: 2025-01-09T07:00:00.000-0400
draft: true
tags: null
---

## Common problems

### Floaters

Objects with floating components, or components that are just barely connected, will not print, or will break easily.

For example, the `R` in this design, viewed from the top-down, looks good to go:

![[Pasted image 20250208082933.png]]

However, if the design is rotated, we see that the `R` is floating above the rectangular prism base below it:

![[Pasted image 20250208083007.png]]

This design will not print successfully.

One possible fix would be to add supports below the `R` but the most correct solution is likely to sink the `R` into the base of the keychain, like this:

![[Pasted image 20250208083258.png]]

### Hangers

Objects with significant portions of the design that are "sticking out" or "hanging off" another part of the design are also unlikely to print successfully.

For example, the ring added to the top of this design, to facilitate it's use as a keychain tag, juts out too far from the rectangular prism:

![[Pasted image 20250208083603.png]]

It is also a bit too thin, and is likely to break easily, even if it printed successfully:

![[Pasted image 20250208083633.png]]

An alternative would be to create a simple hole in the corner:

![[Pasted image 20250208084035.png]]

This design will print successfully, and the thickness of the edges next to the hole that remain in the rectangular prism should be sufficient to ensure the print will not easily break when attached to a keychain.

### Lack of support

A 3D printer builds objects in layers.

Aim to have a design connect with as much of the workplane in Tinkercad as possible.

For example, the largest face of the rectangular prism currently sits upon the workplane:

![[Pasted image 20250208084408.png]]

This will print successfully.

However, say that the components of this design were grouped, and then the entire object were rotated such that only a tiny portion of the design connects with the workplane:

![[Pasted image 20250208084611.png]]

Granted, this is an extreme and somewhat silly example, but you can likely appreciate that this design would not print successfully.

As a rule, orient your designs such that components "touch" the workplane as much as possible. This might mean your design looks "sideways" in Tinkercad, but once printed, you can of course simply rotate the object to whatever orientation you like!

## Reviewing your designs

To ensure your prints are made in a timely manner (and to demonstrate your ability to self-diagnose and correct the issues described above) you are asked to create a "fly-through" of your design and to submit this [[Submitting files from Tinkercad|along with your .STL file]].

Creating a fly-through means using the screen recording capabilities of your Mac to show your design being rotated in all three dimensions.

Here is an example, showing how to initiate the recording, and then how to rotate the design in multiple dimensions:

 <div style="padding:56.25% 0 0 0;position:relative;">
	<iframe src="https://player.vimeo.com/video/1054777432?h=03c86bd4e8&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&portrait=0&byline=0&title=0" frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="Opening the Teamspace">
	</iframe>
	</div>
 <script src="https://player.vimeo.com/api/player.js"></script>