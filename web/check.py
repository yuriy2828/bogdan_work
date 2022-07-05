from docxtpl import DocxTemplate
doc = DocxTemplate("checkTemplate.docx")
context = { 'customer' : ""}
doc.render(context)
doc.save("шаблон-final.docx")