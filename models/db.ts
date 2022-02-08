export interface DbModal {
	Insert?: (insertObj: Insert) => void;
}
export interface Insert {
	tableName: string;
	value: Object;
}
