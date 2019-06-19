import { Selector } from 'testcafe';
import { TableIterator } from './tableIterator';

class SomeTablePage {

    findRow(id: string): Selector {
        try {
            return Selector('td').withText(id).parent('tr')
        } catch (err) {
            console.log(err)
        }
    }
	

    async getRowCells(tableRow: Selector) {
        try {
            const firstColumn = await tableRow.find('td').nth(await TableIterator.getHeaderIndex('First Column Header')).innerText;
            const secondColumn = await tableRow.find('td').nth(await TableIterator.getHeaderIndex('Second Column Header')).innerText;
            const thirdColumn = await tableRow.find('td').nth(await TableIterator.getHeaderIndex('Ação')).child();

            return {
                firstColumn: firstColumn,
                secondColumn: secondColumn
                ,
                thirdColumn: thirdColumn
            };
        } catch (err) {
            console.log(err)
        }
    }
}

export const someTablePage = new SomeTablePage();
