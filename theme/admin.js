const repoName = "credeoseo/nationalcredit.ru"
const alias = {
	"name": "alias",
	"label": "Дочерний город",
	"file": "/irkutsk/index.11tydata.json",
	"widget" : "list",
	"editor": {
		"preview": false,
	},
	"fields": [
		{
			"label": "Название дочернего города(латиницей)",
			"name": "alias",
			"widget": "string"
		},
		{
			"label": "Телефон",
			"name": "phone",
			"widget": "string"
		},
		{
			"label": "Почта",
			"name": "mail",
			"widget": "string"
		},
		{
			"label": "WhatsApp",
			"name": "wa",
			"widget": "string"
		},
		{
			"label": "Адрес",
			"name": "address",
			"widget": "string"
		},
		{
			"label": "Карта",
			"name": "mapLink",
			"widget": "string"
		}
	]
}
export { repoName }
export { alias }
