---
title: Контакты компании
description: На этой странице есть, контакты компании такие как, номер телефон, whatsapp и адрес, а так же форма заказа звонка
layout: layout/static.njk
feedback: true
---

# Контакты

- Наш номер телефона [{{ data.phone }}](tel:{{ data.phone }})

- Наш [WhatsApp](https://wa.me/{{ data.wa }})

- Наш адрес
{% for item in data.addresses %}
{% if item.mapLink %}
	- [{{ item.address }}]({{ item.mapLink }})
{% else %}
	- {{ item.address }}
{% endif %}
{% endfor %}
