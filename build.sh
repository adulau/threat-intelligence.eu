#!/bin/bash
bundle exec jekyll build
rsync -v -rz --checksum  _site/ adulau@vernor.foo.be:/home/adulau/website/threat-intelligence.eu/
