export class BackgroundConfig{

    public constructor(){
        console.log("BackgroundConfig init");
    }

    public static test(name: string): string{
        return "hello " + name;
    }

}

