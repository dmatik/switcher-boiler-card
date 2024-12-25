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

### Manual


## Usage

The card can be fully configured from HA UI Editor or from YAML.


### YAML configuration

|        Name        |                        Description                                                    |             Required             |
| ------------------ | --------------------------------------------------------------------------------------| -------------------------------- |
| `type`             | `custom:switcher-boiler-card`                                                         | yes                              |
| `entity`           | Switcher switch entity                                                                | yes                              |
| `name`             | Card name. Leave empty to take entity friendly name.                                  | no                               |
| `icon`             | Card icon. Leave empty to take icon from entity.                                      | no                               |
| `time_left`        | Time left sensor entity. Leave empty if you don't want it to be displayed.            | no                               |
| `electrical_current` | Electrical Current sensor entity. Leave empty if you don't want it to be displayed. | no                               |
