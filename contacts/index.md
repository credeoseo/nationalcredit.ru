---
title: Контакты компании
description: На этой странице есть, контакты компании такие как, номер телефон, whatsapp и адрес, а так же форма заказа звонка
layout: layout/static.njk
feedback: true
---
# Контакты
## {{ envs.site.city }}

- Наш номер телефона [{{ envs.contacts.phone }}](tel:{{ envs.contacts.phone }})

- Наш [WhatsApp](https://wa.me/{{ envs.contacts.wa }})

- Наш адрес
{% for item in envs.contacts.addresses %}
{% if item.mapLink %}
	- [{{ item.address }}]({{ item.mapLink }})
{% else %}
	- {{ item.address }}
{% endif %}
{% endfor %}

{% if envs.contacts.aliases %}
{% for i in envs.contacts.aliases %}
## Контакты {% if envs.contacts.aliases.length >= 1 %}{{ i.city }}{% endif %}
- Наш номер телефона [{{ i.phone }}](tel:{{ i.phone }})

- Наш [WhatsApp](https://wa.me/{{ i.wa }})

- Наш адрес
{% for item in i.addresses %}
{% if item.mapLink %}
	- [{{ item.address }}]({{ item.mapLink }})
{% else %}
	- {{ item.address }}
{% endif %}
{% endfor %}
{% endfor %}
{% endif %}

