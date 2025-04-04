[![release][release-badge]][release-url]

![alt text](https://github.com/dmatik/switcher-boiler-card/blob/main/images/Switcher_logo_200.png "Logo")

# switcher-boiler-card

<a href="https://www.buymeacoffee.com/bg7MaEJHc" target="_blank"><img src="https://www.buymeacoffee.com/assets/img/custom_images/white_img.png" alt="Buy Me A Coffee" style="height: auto !important;width: auto !important;" ></a>

![alt text](https://github.com/dmatik/switcher-boiler-card/blob/main/images/switcher_boiler_card.png "Switcher Boiler Card")

## What is switcher-boiler-card ?

Custom Switcher Boiler Switch card for Home Assistant.
Built to work with official [Switcher Integration](https://www.home-assistant.io/integrations/switcher_kis/) for Home Assistant.
The card designed to look and feel similar to other Tile cards in HA.

Welcome to our [Smart Home Israel](https://discord.gg/ayZ3Kkg) Discord channel to discuss.
#### For any question, feel free to leave comment in my [HA Community post](https://community.home-assistant.io/t/lovelace-switcher-boiler-card/826475).


### Features

-   Fully supports HA UI Editor (no need to edit YAML code).
-   Displays remaining time in state field.
-   Optional additional 2 sensors to display in state field. Sensor 1 to be displayed when Switcher is On. Sensor 2 to be displayed when Switcher is On and Off.
-   Optional icon sensor, very useful to display water temperature (if you have it installed separatelly), instead if icon.
-   Optional temperature color thresholds when icon sensor is being used.
-   Optional, configurable color thresholds for Cold and Hot limits, when icon sensor is being used.
-   The time selection button loops through configurable timer values in minutes, when clicked.
-   Turn on with or without selected timer.
-   Support editing in YAML as well (please see table below).

## Installation

### HACS

To install from HACS you need to add this repository as custom repository first.

1. Go to HACS and open 3 dots menu on the right upper corner.
2. Select "Custom repositories" option.
3. In the "Custom repositories" popup populate as below:
    - **Repository:** `https://github.com/dmatik/switcher-boiler-card`
    - **Type:** `Dashboard`
4. Click "Add".

Now you should be able to find "Switcher Boiler Card" in HACS store.

### Manual

1. Download `switcher-boiler-card.js` and `switcher-boiler-card-editor.js` files from `dist` folder in the [latest release][release-url].
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

![alt text](https://github.com/dmatik/switcher-boiler-card/blob/main/images/switcher_editor.png "Switcher Boiler Card Editor")


### YAML configuration


|        Name          |                        Description                                                    |             Required             |             Default             |
| -------------------- | ------------------------------------------------------------------------------------- | -------------------------------- | ------------------------------- |
| `type`               | `custom:switcher-boiler-card`                                                         | yes                              |                                 |
| `entity`             | Switcher switch entity                                                                | yes                              |                                 |
| `name`               | Card name. Leave empty to take entity friendly name.                                  | no                               | "Boiler"                        |
| `icon`               | Card icon. Leave empty to take icon from entity.                                      | no                               | "mdi:waves"                     |
| `time_left`          | Time left sensor entity. Leave empty if you don't want it to be displayed.            | no                               |                                 | 
| `sensor_1`           | Sensor 1 entity. Displayed only when Switcher is On.                                  | no                               |                                 |
| `sensor_2`           | Sensor 2 entity. Displayed when Switcher is On and Off.                               | no                               |                                 |
| `icon_sensor`        | Icon Sensor entity. Displayed when Switcher is On and Off. Must be numeric.           | no                               |                                 |
| `color_thresholds`   | temperature color thresholds for icon sensor.                                         | no                               | false                           |
| `cold_threshold`     | Cold threshold upper limit.                                                           | no                               | 20                              |
| `hot_threshold`      | Hot threshold lower limit.                                                            | no                               | 50                              |
| `timer_values`       | List of values for timer in minutes (from 1 to 150).                                  | no                               | 15, 30, 45, 60                  |

Example:

```yaml
type: custom:switcher-boiler-card
entity: switch.switcher_touch_d54f
name: Boiler
icon: mdi:waves
time_left: sensor.switcher_touch_d54f_remaining_time
sensor_1: sensor.switcher_touch_d54f_current
icon_sensor: sensor.switcher_water_temperature
color_thresholds: true
cold_threshold: 20
hot_threshold: 50
timer_values:
  - "15"
  - "30"
  - "45"
  - "60"
```

## Optional

### Remaning Time Sensor

You can use the below Template Sensor in HA to display the Remeaning Time sesnor in more user frinedly way.  
Just replace `switch.switcher_touch_d54f` and `sensor.switcher_touch_d54f_remaining_time` with your entities names.

```yaml
template:

    sensor:
      # Remaining Time Alt
      - name: "switcher_kis_remaining_time_alt"
        unique_id: switcher_kis_remaining_time_alt
        icon: mdi:timelapse
        state: >-
          {% if is_state("switch.switcher_touch_d54f", "off") or is_state("sensor.switcher_touch_d54f_remaining_time", "00:00:00") %}
              off
          {% else %}
              {% set hour = states("sensor.switcher_touch_d54f_remaining_time").split(':')[0] %}
              {% set min = states("sensor.switcher_touch_d54f_remaining_time").split(':')[1] %}
              {% set sec = states("sensor.switcher_touch_d54f_remaining_time").split(':')[2] %}
              {% set sec_int = sec|int %}
              {% set min_int = min|int %}
              {% set hour_int = hour|int %}

              {% if min_int > 0 %}
                {% set min_int = min_int + 1 %}
              {% endif %}
              {% if min_int == 60 %}
                {% set min_int = 0 %}
                {% set hour_int = hour_int + 1 %}
              {% endif %}

              {% if hour_int == 0 and min_int == 0 %}
                  {{ sec_int }} sec
              {% elif hour_int == 0 %}
                  {{ min_int }} min
              {% else %}
                  {{'%02d' % hour_int}}:{{'%02d' % min_int}}
              {% endif %}
          {% endif %}
```


<!-- Badges -->
[hacs-badge]: https://img.shields.io/badge/hacs-default-orange.svg?style=flat-square
[release-badge]: https://img.shields.io/github/v/release/dmatik/switcher-boiler-card?style=flat-square


<!-- References -->
[hacs-url]: https://github.com/hacs/integration
[home-assistant]: https://www.home-assistant.io/
[release-url]: https://github.com/dmatik/switcher-boiler-card/releases
