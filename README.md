## Technical Challenge 

## API and Services 

You’re invited to showcase your technical skills by designing and presenting a solution to the scenario below. This is an opportunity to demonstrate your understanding and mastery of API and Services design and also allows us to get a better understanding of your coding style, testing, and logical structure. 
You may use either dotnet, java/kotlin, javascript, or python as well as any familiar libraries and frameworks available, but be prepared to justify the decisions you make. 

The exercise should only take an hour or two of your time. You likely won’t finish all of it to the level you would like so be deliberate about what you do implement and document any unfinished items or things you would improve/change if you had more time. The goal is to understand how you approach a problem as well as get a rough idea of your technical skills. 

## The Task 

Create an API that tracks the configuration state(s) on a set of Internet of Things (IoT) connected hardware devices. The configuration state is a simple JSON document or data container object, what fields it contains is up to you. The API will live in the public cloud and be accessible globally. 
You can choose what type of IoT device the API relates to (i.e lightbulb, thermostat, switch) or keep it simple and generic. 
The configuration state(s) could be the on/off state of the device and/or some characteristic of the device (i.e target temperature for a thermostat, colour temperature for a lightbulb). It is up to you to decide what state to include. 

The solution should cover the following: 

- An HTTP GET endpoint that retrieves the current configuration, and a number of previous configurations 
- An HTTP POST endpoint that updates the stored configuration either partially or in its entirety 
- Some way of de-duplicating multiple instances of configuration if there is a race condition

## What we’re looking for: 

- What mandatory fields are chosen on the configuration document to suit a hardware deployment scenario 
- How you choose to compare configurations to determine duplication - Code comments to explain your logic 
- (Optional) Commit history to show your problem solving and workings
