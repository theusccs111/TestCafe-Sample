import { Selector } from 'testcafe';

export class TableIterator {
    static async getHeaderIndex(headerText: any): Promise<number> {
        interface CustomSelector extends Selector {
            getIndex: Promise<number>
        }

        const headerElement = <CustomSelector>Selector('th').withText(headerText).addCustomDOMProperties({
            getIndex: el => {
                const nodes = Array.prototype.slice.call(el.parentElement.children);
                return nodes.indexOf(el)
            }
        })

        return await headerElement.getIndex
    }
}
