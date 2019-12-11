var Xcel = require('xlsx');

class xlReader {

    read_from_excel(sheetName, filePath) {
        var workbook = Xcel.readFile(filePath);
        var worksheet = workbook.Sheets[sheetName];
        return Xcel.utils.sheet_to_json(worksheet);
    }
}
module.exports = new xlReader();

odule.exports to import code into your application.



The basic use case you'll see (e.g. in ExpressJS example code) is that you set properties on the exports object in a .js file that you then import using require()
