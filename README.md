# HUGO Résumé

Created from [Start Bootstrap - Resume](https://startbootstrap.com/themes/resume/) and [eddiewebb/hugo-resume](https://github.com/eddiewebb/hugo-resume).

This is a single-page website with a left-aligned navigation menu. Meant to highlight your achievements, work experience, and projects, this template modifies [eddiewebb/hugo-resume](https://github.com/eddiewebb/hugo-resume) by removing extra bloat (that I don't need), tweaking the design, adding some new components, and improving efficiency/speed. Includes an `/admin` endpoint through [netlifycms](https://www.netlifycms.org/) that allows authorized users to use a WYSIWYG editor and commit files back to markdown, but with a Wordpress/CMS like experience.

## Example

See [Hayden's site](https://haydenhousen.com) ([GitHub Repo](https://github.com/HHousen/hh-personal)) for a live example.

## Setup & Use

This theme uses a combination of a custom archetype `projects` and some data files to drive content.

You can test the provided [example site](https://github.com/HHousen/hh-personal) with the commands:

```
git clone https://github.com/HHousen/hh-personal hugo-resume-example
cd hugo-resume-example
hugo server
```

### Summary
Edit the main `contents/_index.md with a brief bio/summary`

### Data files
Data files are used for simple content presented on the homepage.

- [data/skills.json](https://github.com/HHousen/hh-personal/blob/master/data/skills.json)
- [data/experience.json](https://github.com/HHousen/hh-personal/blob/master/data/experience.json)
- [data/education.json](https://github.com/HHousen/hh-personal/blob/master/data/education.json)

### Projects

Add a new project with `hugo new projects/name-of-project/index.md`. You can see some example projects on [HHousen/hh-personal](https://github.com/HHousen/hh-personal/tree/master/content/projects), HHousen's personal site and the demo site for this theme. You can also add a new project to your live site using the `/admin` endpoint/[netlifycms](https://www.netlifycms.org/).

Projects are organized in page bundles. This means images and other files that belong to one project will be grouped together, allowing for better organization. Additionally, using page bundles means that images can be interpreted as resources and thus they can be dynamically resized to the containing element during building, resulting in faster page loads.

### Template Parameters

All personal information and general site configuration is stored in [`config.toml`](https://github.com/HHousen/hh-personal/blob/master/config.toml)

## Credits

[eddiewebb/hugo-resume](https://github.com/eddiewebb/hugo-resume) ported the Start Bootstrap Resume theme by David Miller to [HUGO](https://gohugo.io/). This fork of [eddiewebb/hugo-resume](https://github.com/eddiewebb/hugo-resume) expands on the functionality and simplifies some components as discussed above.

### Start Bootstrap Resume

Start Bootstrap is an open source library of free Bootstrap templates and themes. All of the free templates and themes on Start Bootstrap are released under the MIT license, which means you can use them for any purpose, even for commercial projects.

* https://startbootstrap.com
* https://twitter.com/SBootstrap

Start Bootstrap was created by and is maintained by **[David Miller](http://davidmiller.io/)**, Owner of [Blackrock Digital](http://blackrockdigital.io/).

* http://davidmiller.io
* https://twitter.com/davidmillerskt
* https://github.com/davidtmiller

Start Bootstrap is based on the [Bootstrap](http://getbootstrap.com/) framework created by [Mark Otto](https://twitter.com/mdo) and [Jacob Thorton](https://twitter.com/fat).
