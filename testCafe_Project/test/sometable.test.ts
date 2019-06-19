import {
    someTablePage
} from '../services/someTable.page';
import { debug } from 'util';

fixture(`SOME TABLE`)
test('Find Third Row', async t => {
    await t.navigateTo('file:///C:/Users/matheus.santana/Desktop/7760124a98847389dbf72d2eb85eb5de-d8983146491f52027b70f8a9d7de506efcbfa527/7760124a98847389dbf72d2eb85eb5de-d8983146491f52027b70f8a9d7de506efcbfa527/index.html');

    const data = {
        id: "3",
        firstColumn: "Administradores",
        secondColumn: "Green"
    };


    let tableRow = someTablePage.findRow(data.firstColumn);
    let tableCells = await someTablePage.getRowCells(tableRow);
	console.log(tableRow);
	console.log(tableCells);
	
    await t
    .click(tableCells.thirdColumn)
        .expect(tableCells.firstColumn).eql(data.firstColumn)
        .expect(tableCells.secondColumn).eql(data.secondColumn)

    .debug()

});
