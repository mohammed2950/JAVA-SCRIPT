'use strict'
const now = new Date()
const months = ["jan" ,"feb", "mar" ,"apr" ,"may" , "june" , "july" ]
// Reference ISO
// http://www.lingoes.net/en/translator/langcode.htm

function show (description, result) {
document.writeln('<tr><td>' + description + '</td><td>' + result + '</td></tr>')
}

show(
'Todays date, automatically translated',
 now
)
show(
'Number of ms elapsed since 01/01/1970 at 00:00:00',
now.getTime()
)

show(
'The current month\'s name\'',
months[now.getMonth()]
)

show(
'Localization in Arabic of today\'s date\'',
now.toLocaleDateString('ist',{weekday:'long',year:'numeric',month:'long',day:'numeric'})
)

show(
'Offset date of today in minutes with UTC',
now.getTimezoneOffset()
)

show(
"Mission Apollo11: Date of landing on the Moon July 20, 1969 at 20 h 17 min 40 s UTC",
new Date('1969-07-26')
)
