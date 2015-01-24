---
layout: post
title:  "What and How of 'Jekyll'"
date:   2014-11-11 10:09:33
categories: jekyll update
author: EUTS
tags: tutorial
short: Introduction to Jekyll, with links on how to learn it.
---
Jekyll is a blog-aware, static site generator in [Ruby](https://www.ruby-lang.org/en/). Jekyll takes the content of your website, renders [Markdown](http://en.wikipedia.org/wiki/Markdown) and [Liquid](http://liquidmarkup.org/) templates, and spits out a complete, static website ready to be served by a web server. Jekyll is the engine behind GitHub Pages, which is used to host this site.

You can find out more info about customizing your Jekyll theme, as well as basic Jekyll usage documentation at [jekyllrb.    com](http://jekyllrb.com/)
You can find the source code for the Jekyll new theme at: [github.com/jglovi    er/jekyll-new](https://github.com/jglovier/jekyll-new) 
 You can find the source code for Jekyll at [github.com/jekyll/jekyll](https:    //github.com/jekyll/jekyll)

This post is in `_posts` directory.  There are many different ways to rebuild the site, but the most common way is to run `jekyll server`, which launches a web server and auto-regenerates your site when a file is updated.

To add new posts, simply add a file in the `_posts` directory that follows the convention `YYYY-MM-DD-name-of-post.ext` and includes the necessary front matter. Take a look at the source for this post to get an idea about how it works.

Jekyll also offers powerful support for code snippets:

{% highlight ruby %}
def print_hi(name)
  puts "Hi, #{name}"
end
print_hi('Tom')
#=> prints 'Hi, Tom' to STDOUT.
{% endhighlight %}

Check out the [Jekyll docs][jekyll] for more info on how to get the most out of Jekyll. File all bugs/feature requests at [Jekyll’s GitHub repo][jekyll-gh]. If you have questions, you can ask them on [Jekyll’s dedicated Help repository][jekyll-help].

[jekyll]:      http://jekyllrb.com
[jekyll-gh]:   https://github.com/jekyll/jekyll
[jekyll-help]: https://github.com/jekyll/jekyll-help
