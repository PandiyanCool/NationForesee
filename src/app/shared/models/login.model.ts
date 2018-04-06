export interface IUserCredentials {
    userName: string;
    password: string;
}

export interface IUser {
    accessToken: string;
    email: string;
    firstName: string;
    Username: string;

}

export interface IProductSalesReport {
    SKUID: string;
    ASIN: string;
    ProductLibraryCode: string;
    ProductImageFilePath: string;
    WarehouseQuantity: number;
    AmazonQunatity: number;
    ContainerQuantity: number;
    WeeksInAmazon: number;
    MonthsInAmazon: number;
    LandCost: number;
    FBACost: number;
    GST: number;
    MinPrice: number;
    MaxPrice: number;

    W0Count: number;
    W1Count: number;
    W2Count: number;
    W3Count: number;
    W4Count: number;
    W5Count: number;
    W6Count: number;
    W7Count: number;
    W8Count: number;
    W0Cancel: number;
    W1Cancel: number;
    W2Cancel: number;
    W3Cancel: number;
    W4Cancel: number;
    W5Cancel: number;
    W6Cancel: number;
    W7Cancel: number;
    W8Cancel: number;
    W0AdSpend: number;
    W1AdSpend: number;
    W2AdSpend: number;
    W3AdSpend: number;
    W4AdSpend: number;
    W5AdSpend: number;
    W6AdSpend: number;
    W7AdSpend: number;
    W8AdSpend: number;
    W0duration: number;
    W1duration: number;
    W2duration: number;
    W3duration: number;
    W4duration: number;
    W5duration: number;
    W6duration: number;
    W7duration: number;
    W8duration: number;
    ContainerReportList: IContainerReport[];
}

export interface IContainerReport {
    ID: number;
    VendorCode: string;
    Count: number;
    EDD: Date;
}
