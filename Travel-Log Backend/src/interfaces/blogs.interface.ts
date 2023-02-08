export interface Blog {
    _id: string;
    userId: String,
    title: String,
    description: String,
    tags: Array<String>,
    journeyDate: {
        startDate: String,
        endDate:String,
    },
    images:Array<String>,
    travelCost: Number,
    placesToVisit: Array<String>,
    heritages: Array<String>,
    travelRate: Number,
    safetyRate:Number,
    location: String,
    allowQuestions: Boolean,
    isDeleted:Boolean,
    }

