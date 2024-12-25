![alt text](https://github.com/dmatik/switcher-boiler-card/blob/main/images/Switcher_logo_200.png "Logo")

# switcher-boiler-card

![alt text](https://github.com/dmatik/switcher-boiler-card/blob/main/images/switcher_boiler_card.png "Logo")

## What is switcher-boiler-card ?

Custom Switcher Boiler Switch card for Home Assistant.
Built to work with official [Switcher Integration](https://www.home-assistant.io/integrations/switcher_kis/) for Home Assistant.
The card desgned to look and feel similar to other Tile cards in HA.

### Features

-   Fully supports HA UI Editor (no need to edit YAML code).
-   Displays remaining time and/or Electrical Current in state field.
-   The time selection button loops through 15/30/45/60 minutes, when clicked.
-   Turn on with or without selected timer.
-   Support editing in YAML as well (please see table below).

## Installation

### HACS (Coming soon)

To install from HACS you need to add this repository as custom repository first.

### Manual

1. Download `switcher-boiler-card.js` and `switcher-boiler-card-editor.js` files from `src` folder in the [latest release][release-url].
2. Put `switcher-boiler-card.js` and `switcher-boiler-card-editor.js` files into your `config/www/switcher-boiler-card` folder.
3. Add reference to `switcher-boiler-card.js` in Dashboard. There's two way to do that:
    - **Using UI:** _Settings_ → _Dashboards_ → _More Options icon_ → _Resources_ → _Add Resource_ → Set _Url_ as `/local/switcher-boiler-card/switcher-boiler-card.js` → Set _Resource type_ as `JavaScript Module`.
      **Note:** If you do not see the Resources menu, you will need to enable _Advanced Mode_ in your _User Profile_
    - **Using YAML:** Add following code to `lovelace` section.
        ```yaml
        resources:
            - url: /local/switcher-boiler-card/switcher-boiler-card.js
              type: module
        ```

## Usage

### UI Editor
The card can be fully configured from HA UI Editor.

![alt text](https://github.com/dmatik/switcher-boiler-card/blob/main/images/switcher_editor.png "Logo")


### YAML configuration


|        Name        |                        Description                                                    |             Required             |
| ------------------ | --------------------------------------------------------------------------------------| -------------------------------- |
| `type`             | `custom:switcher-boiler-card`                                                         | yes                              |
| `entity`           | Switcher switch entity                                                                | yes                              |
| `name`             | Card name. Leave empty to take entity friendly name.                                  | no                               |
| `icon`             | Card icon. Leave empty to take icon from entity.                                      | no                               |
| `time_left`        | Time left sensor entity. Leave empty if you don't want it to be displayed.            | no                               |
| `electrical_current` | Electrical Current sensor entity. Leave empty if you don't want it to be displayed. | no                               |

Example:

```yaml
type: custom:switcher-boiler-card
entity: switch.switcher_touch_d54f
name: Boiler
icon: mdi:waves
time_left: sensor.switcher_touch_d54f_remaining_time
electrical_current: sensor.switcher_touch_d54f_current
```

<!-- References -->

[home-assistant]: https://www.home-assistant.io/
[release-url]: https://github.com/piitaya/lovelace-mushroom/releases
