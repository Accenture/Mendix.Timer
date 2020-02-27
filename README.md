# Timer
A Mendix plugable widget that displays time in format `mm:ss` left until configured action will be triggered.

## Typical usage scenario
It's useful in applications that need to execute an action once after specified period of time or when configured time has been reached e.g:
- Remove user session after long period of inactivity
- Save user form and close page 

## Usage
Place the widget inside your app and provide the following settings:
- `Time attribute`: DateTime attribute holding time when specified action should be triggered.
- `Action`: An action which will be triggered only once after time defined in `Time attribute` has been reached.

**Note!**
If value of DateTime attribute is in the past, the action will be triggered immediately after page is loaded.

Configured action will be triggered **only once**.