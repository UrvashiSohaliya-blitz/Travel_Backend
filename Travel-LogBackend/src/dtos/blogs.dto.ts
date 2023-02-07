
export class CreateBlogDto {
  public userId: string;
  public title: string;
  public location: string;
  public description: string;
  public tags: string[];
  public journyDate: {
        startDate: string;
        endDate: string;
  }
  public travelCost: number;
  public images: string[];
  public placesToVisit: string[];
  public heritages: Array<String>;
  public travelRate: Number;
  public saftyRate: Number;
  public allowQustions: Boolean;
    }
