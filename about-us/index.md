---
title: О компании
description: Информация о компании и обратная связь
layout: layout/static.njk
feedback: true
---

# О нас

Мы сервис по подбору финансовых услуг.
Имеем много положительных [отзывов](/#reviews), и готовы дальше помогать вам в быстром выборе выгодных предложений.

## {{ envs.site.city }}

Работаем по адресу:
{% for item in envs.contacts.addresses %}
{% if item.mapLink %}
  - [{{ item.address }}]({{ item.mapLink }})
{% else %}
  - {{ item.address }}
{% endif %}
{% endfor %}

Если у вас есть вопросы к нашей компании вы можете с нами связаться по номеру телефона [{{ envs.contacts.phone }}](tel:{{ envs.contacts.phone }}) или через [WhatsApp]({{ envs.contacts.wa }})

{% if envs.contacts.aliases.length >= 1 %}
{% for i in envs.contacts.aliases %}
## {{ i.city }}

Работаем по адресу:
{% for item in i.addresses %}
{% if item.mapLink %}
  - [{{ item.address }}]({{ item.mapLink }})
{% else %}
  - {{ item.address }}
{% endif %}
{% endfor %}

Если у вас есть вопросы к нашей компании вы можете с нами связаться по номеру телефона [{{ i.phone }}](tel:{{ i.phone }}) или через [WhatsApp]({{ i.wa }})
{% endfor %}
{% endif %}

Или можете заказать обратный звонок в форме ниже
