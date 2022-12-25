export class ItemsService {
    items: {title: string, content: string}[] = [];

    addNewItem(title: string, content: string) {
        this.items.push({title: title, content: content});
    }
}