export interface Blog {
    _id: string;
    userId: String,
    title: String,
    description: String,
    tags: Array<String>,
    journyDate: {
        startDate: String,
        endDate:String,
    },
    images:Array<String>,
    travelCost: Number,
    placesToVisit: Array<String>,
    heritages: Array<String>,
    travelRate: Number,
    saftyRate:Number,
    location: String,
    allowQustions:Boolean
    }

