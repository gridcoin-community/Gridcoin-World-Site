# What are these pages?

To avoid manually editing HTML repetitively by hand, we make use of [templates](https://middlemanapp.com/basics/templating-language/) and [data files](https://middlemanapp.com/advanced/data-files/) for the whitelist for the Gridcoin website.

## Contributing towards the whitelist

### Template

```
name: "text"
link: "url"
img: "url"
topic: "text"
goal: "text"
sponsor: "text"
supports_windows: "y"
supports_mac: "y"
supports_linux: "y"
supports_bsd: "y"
supports_arm: "y"
supports_virtualbox: "y"
supports_android: "y"
supports_nvidia_gpu: "y"
supports_amd_gpu: "y"
supports_intel_gpu: "y"
gdpr: "yes|no"
gdpr-enable-steps: "url" (only added if gdpr is "yes")
team: "url"
stats: "url"
```

### Field descriptions

```
name: Project's name
link: Project's BOINC project homepage
img: Circular icon
topic: project category
goal: The purpose of the project
sponsor: Who runs/funds the operation of the project
team: A hyperlink to team 'Gridcoin' within each BOINC project.
stats: A hyperlink to the project's gridcoinstats.eu page.  
supports_*: self explanatory, only requires being present to trigger.
supports_arm: linux on arm

# unused on .world
gdpr: Does the project require you to enable gdpr stats export
gdpr-enable-steps: Link to instruction for enabling stats export on that project
```

### To Do
* Mouse hover info for vendor info, or additional columns?


## Adding to the exchange list


### Template
```
name: "text"
image: "url"
link: "url"
```

### Field descriptions
```
name: The name of the exchange
image: Link to the image in /asset/ of the icon of the exchange 
link: Link to the exchange itself
```