Building websites has evolved from
writing plain HTML, CSS, and JavaScript
to using components and design systems
for a more scalable and organized
approach. Whether you're building a
simple static site or a dynamic app,
using reusable parts keeps your code
cleaner and easier to maintain. A design
system is basically a collection of
reusable UI components, global CSS
styles, and utility classes that ensure
consistency in your design. Instead of
rewriting styles from scratch every
time, you create predefined reusable
components that speed up development and
make updates way easier. Think of it
like having a set of Lego bricks instead
of carving new ones out of wood every
time you want to build something. Let's
say you're building a website to promote
your services. Instead of repeating the
same HTML structures all over the place,
break your website into reusable
components. Up top we have a header,
then a hero section followed by whatever
this is. A few more sections, a call to
action, and finally a footer. So,
actually, step zero should be designing
first. If you don't know how to design,
just watch some videos to learn the
basics. Use a tool like Mobin, the
sponsor of this video to steal. I mean,
take inspiration from good designs. You
can also check out your competition or
browse the Figma community for ideas.
Personally, I prefer Mobin because it
makes filtering and browsing through
tons of designs ridiculously easy. In
just a few minutes, you can go through
hundreds of realworld designs that have
already been tested and iterated on, so
you know you're looking at the best of
the best. You can filter by platform or
any category you like. With all these
different categories and options,
finding good, relevant designs doesn't
take long. Plus, if you're looking for
something specific, like say a footer
section, just search for it, browse, and
save the ones you like to your
collection. I'm not going to walk you
through every single feature because
there are way too many, but trust me,
they're worth exploring. The UI is
already super intuitive, so you don't
need me to hold your hand. I'll leave
the link in the description, but I
opened up Mobin for a reason. Let's
analyze some real websites and see if we
can spot a pattern.
These testimonial cards, same
component. This bento grid also the same
component. Some of them might look
different, but they are not. On larger
screens, flexbox kicks in and makes
things a bit more dynamic.
Anyone can see these are just reused
components. Yep. These four sections,
same component, three variables or props
if we're being technical. Icon, heading,
and details.
Hold on a minute. I hope you're seeing
what I'm seeing. We've got our classic
two column setup. One column with an
image, the other with a subheading,
heading, and details. And when needed,
just reverse the flex
direction. This is literally the same
component we just saw earlier. And this
one, too. Okay, I get it now. This whole
page is built using just two components.
The header, hero section, call to
action, and footer are global
components. Anyway, so really, this
entire page is just dropping the right
components into place. Let's check out
CRM. Yep, same hero section. And of
course, the same components are used
here, too. I bet every page follows the
same pattern, but let's double check.
Yep. Every single page is built using
the same reusable components. In simple
terms, repeat your design. If you're
building apps, you have to do this
anyway because you need a consistent
structure to render dynamic data. Look
at YouTube. Every single video card
follows the same style and props. And
the only thing that changes is the
content
inside. Now take this knowledge and go
design something interesting. Once you
have a design in place, it's time to
bring it to life. If you don't code, you
can use any of these other options. But
regardless of the tool, the same design
principles still
apply. We'll start simple. First, we'll
use variables and utility classes to
speed up the development process. Before
anything else, we do a quick reset to
remove default margins and paddings.
Also, we make sure width and height
calculations include padding and borders
to prevent weird layout issues. Then, we
define our global colors and font styles
as variables. This keeps everything
consistent and makes the development
process way smoother. Speaking of
consistency, I also add spacing
variables. If you've never done this
before, it might seem unnecessary, but
trust me, it makes a huge difference.
These variables affect both the
aesthetics and usability of your
website. Plus, if you ever need to tweak
the design in the future, it's as simple
as changing one value instead of
manually adjusting everything. Next, we
override some defaults and style our
global elements like headings, links,
and
buttons. The key here, never use fixed
values like black or 40 pixels. Instead,
always use the variables you just
defined. Start with the basics. You can
always add more styles later as needed.
If you're using a noode platform, don't
skip this step. Look for the theme
settings and set your global colors and
typography there. Most platforms offer
tools and plugins to keep things
structured. You just need to apply the
same
principles. Now, let's create some super
common utility classes. Things like
containers, text alignment, flexbox
layouts, padding, and margin helpers. If
you've used Tailwind before, this should
feel
familiar. The difference here, you get
to name the classes so they're actually
memorable. We'll go over Tailwind later
in the video, but for now, this setup
gives us full control and
flexibility. All right, now that our
initial setup is done, it's time to
start styling. There are two main
approaches to writing CSS. One is the
single file approach, where you keep
everything in one CSS file. The other is
a component-based approach where you
break things into separate CSS files for
different
components. The first approach is
simpler as there's no setup involved. So
let's start with that and see other
options in a minute. Since we're styling
repeating elements, I'll call this step
styling components. Even though the
first process is just plain old HTML,
the header will be the same across the
website. So you just build it once and
use it forever.
Same thing with these six
sections. We just used some utility
classes and they can be used throughout
the website across multiple pages. These
two sections are identical except this
flex direction change on larger screens.
The same goes for this one and for the
CTA section as well. Design it once, use
it everywhere. But here's the thing,
this approach doesn't scale very well.
First of all, you have to manually copy
paste the HTML every time you want to
use it somewhere. Secondly, you have no
control over it. Each instance is
independent of the others. So, if you
decide to move this link here or add a
class to this div, you'll have to track
down and edit every section one by one.
And trust me, that's not the kind of fun
we're looking for.
So let's look at a better approach for
building component-based websites. This
is where we actually create reusable
components that can be edited from a
single place and update all the
instances across our website. Before
reaching for a framework, let's first
see a native way of creating components.
Let's see how we can create our header
in one place and use it everywhere.
We're going to create a new custom HTML
element called T header since we can't
use header because it's already taken by
the browser. HTML element is the base
class for all HTML elements and we're
extending it to make our own custom
element. This function runs
automatically when the element t header
is added to the DOM. It's like saying,
"Hey, when this element appears in the
HTML, do this next." So, we define the
structure inside and voila, whenever you
need a header, just link that file and
use it like any normal HTML element.
Imagine you built 10 pages and then
realized the header needs a few more
links. Instead of manually updating each
page, just add them in one place and it
updates everywhere. Way better than copy
pasting. Let's take it further. Create
this section, give it a name and copy
paste the HTML inside. Then find the
variables like heading, details, etc.
and name them however you like.
Then we'll create those variables to
grab the actual text we'll pass into the
HTML. Inside our HTML file, we can use
the custom tag we just created and pass
the values like this. If you've ever
used a framework, this might look very
similar except for the closing tag. The
difference is that here we're passing
values manually instead of fetching them
from an API.
Now let's do the same for the reverse
section. However, we need to add a
reverse utility class to it. While we
can't add it directly here due to the
fixed classes in our component, we can
either create a variable to pass the
class or design a new component
specifically for the reverse section.
However, since these two sections will
always appear together, I prefer
combining them in one component. I'm
going to combine these two sections like
this and pass the reverse class directly
inside our base
component. This makes it easier to
control the layout and the HTML will
look something like
this. This section is simple as it only
contains two variables, the heading and
the paragraph. So let's create two
variables and pass them in like
this. Our CTA section is pretty similar
to the main section with the addition of
a link here. We'll create four variables
for the heading, details, link, and link
text and pass them in like this. The
footer, however, remains the same across
the entire website, so we don't need
variables for it. Instead, let's create
a custom element for it and just copy
paste the footer
HTML. Now, whenever we need the footer,
we can use the custom element like this.
This approach makes our components
modular and easy to reuse. With
everything set up, our components are
ready and we can use them anywhere we
want. If you prefer vanilla solutions,
web components are a fantastic option
for building
websites. But they have their
challenges. If JavaScript is disabled,
the page won't load, hurting SEO and
performance. Plus, as the project grows,
more CSS can lead to naming conflicts
and cascading issues. The shadowdom
helps with scoping, but things get
tricky at scale. The better solution in
this case is to use tools and frameworks
that handle these issues out of the box.
Now, you might be thinking, what about
React? Well, React can be overkill for
static websites. Instead, I suggest
using something like Astro or Spelt,
which are both lightweight, easy to work
with, and generate static HTML for
better performance. You get the best of
both worlds, easy to build, and easy to
load. Personally, I prefer Spelt over
Astro because it allows you to build
dynamic websites as well. So, you won't
have to learn two different frameworks
for different needs. That said, Astro is
also amazing and super simple to use.
So, feel free to give it a try as well.
Now, let's get started building this
website using Spelt and Vanilla CSS.
First, head over to Spelt's beautiful
website. They've got all the
documentation and resources you need to
get started. I won't go over the setup
process here because it's much better if
you follow the official docs and set it
up yourself. Once you're done, you
should see a project structure like
this. a source folder, a routes folder,
and other files and folders that come
with a typical spelt project. Instead of
creating a stylecs file like we did
earlier, we'll create an app.css file
inside the source folder. Why app.css
instead of
style.css. It's just better. That's why
the app.css file will contain all the
global styles we used earlier except for
the component specific styles. Speaking
of components, let's start creating
actual components. We'll create a folder
called components and inside it, we'll
create a header component. Spelt files
use the spelt extension, but they work
just like regular HTML files. You can
use the same tags and syntax you're
already familiar with from plain
HTML. Next, let's move all the header
related CSS into this header.spelt file.
This will help avoid any naming
conflicts or cascading issues down the
line. Once that's done, open the
page.spelt file and include the header
component like this. You can think of
this file as the index.html of your
spelt app. It's the entry point to your
website. Any other pages will go inside
the routes folder just like
this. It's a good idea to install the
spelt extension for your IDE. This way,
you won't have to manually import your
components every time, and your
formatting will look all clean and
pretty. Creating dynamic components in
spelt is almost identical to how we do
it with web components, but even
simpler. The cool thing with spelt is
its built-in prop handling. You just
export a variable and that's it. No more
doing this get attribute thing manually.
Plus, it's reactive, meaning any changes
automatically update the UI. But I'm
getting ahead of myself here. So to use
the components, just do what we did
earlier. Pass values manually or use an
API if you're building a dynamic UI. The
final setup should look something like
this. You have a source folder for all
your components and the app.css file for
global styling. Your pages will be
inside the routes folder and any static
assets like images go in the static
folder. Now here's the thing about
spelt. It's not just a runtime
framework, it's a compiler. Unlike React
or Vue, which use a virtual DOM, spelt
transforms your components into
optimized vanilla code during build
time. This means you get the performance
of a static site, but with the dynamic
flexibility of an app. If your project
is mostly static with some interactive
elements like buttons, forms, or modals,
spelt ensures only those parts stay
dynamic. Everything else remains pure
HTML and CSS. So if you're building a
mostly static website, React might be
overkill. Spelt gives you the simplicity
of plain HTML with modern interactivity,
minus the extra fluff that can slow
things down. For large scale dynamic
apps, use whatever framework you or your
team are comfortable with. But if you're
looking for something simple, using a UI
library like Tailwind can save you time.
Sure, it requires more effort upfront,
but it also gives you more control.
Personally, I prefer writing my own
custom CSS, but that's just me. For the
sake of comparison, let's see how you
design the same website with Tailwind.
First, head over to the official
Tailwind docs to check out the
installation process. Luckily, Spelvelt
makes it super easy to install Tailwind
by default. Pick the method that works
best for you. And don't forget to
install the Tailwind IntelliSense plugin
for autocomplete and syntax
highlighting. Make sure to manually
create the config file if you don't
already have it. The plug-in might not
work properly without it. Then create
the app.css just like we did earlier.
But this time, don't forget to import
Tailwind
CSS. Now let's move on to step two,
creating our variables.
The naming will be a bit different and
we don't need to worry about spacing
variables. Tailwind gives us all the
margin and padding classes we could ever
need. Now let's set up our custom font
classes. It'll look something like this.
The only difference here is that we're
using Tailwind's utility class for
margins rather than manually passing CSS
variables like we did before. In the
base layer, we'll apply all the global
styles needed for our components. And
that's pretty much for the setup. Now,
let's dive into the components and move
all the styles directly into the HTML
markup like this. If you've never used
Tailwind before, this might seem a
little confusing or even ugly at first.
And honestly, I get it. But if you're
already familiar with Tailwind, this
might look a lot cleaner than what we
were doing earlier. And that's pretty
cool, too. But here's the thing. Clients
will never care about what methods you
use to build the website. All they care
about is the final product.
So honestly, do what makes you happy.
That said, here's what the final code
looks like. I'll show both versions, and
it's totally up to you which one you
prefer to explore. Personally, I always
recommend starting with the vanilla
solutions before jumping into frameworks
or libraries. You'll get a solid
understanding of the
fundamentals. But anyway, back to the
topic. The smart way of building
websites, design systems, and
components. Whether you use vanilla
solutions, frameworks, or no code
platforms, the basic principles will
stay the same. So, first things first,
design your website. If design isn't
your strong suit, hire someone or check
out some videos to get a better feel for
it. You can also find inspiration on
platforms like Mobin or the Figma
community. When designing, make sure to
use components and variables for
structuring and styling your content.
And if you're designing dynamic apps,
this becomes a must. Once you have a
design, set up your variables and global
styles. With your basic styles in place,
you can start creating your components
using whatever framework or tool suits
you best. Then it's all about how and
when you use those components across
your 