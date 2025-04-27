---
title: "{{ replace .Name "-" " " | title }}" # Generates title from filename
date: "{{ now.Format "2006-01-02" }}" # Use now.Format for current date
time: "19:00" # Default time
location: "" # Default location
weight: 1 # Default weight
draft: true # Start as draft
---