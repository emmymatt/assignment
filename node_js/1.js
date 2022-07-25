const fs = require('fs');
const parse = require('xml-parser');
const inspect = require('util').inspect;

const XmlParser = xml => parse(xml)

try{
    const xmlcontent = fs.readFileSync('./xmlfile.xml', 'utf-8')
    const obj = XmlParser(xmlcontent)
    console.log(inspect(obj, { colors: true, depth: Infinity }))
}
catch (error){
    console.log(error)
}
