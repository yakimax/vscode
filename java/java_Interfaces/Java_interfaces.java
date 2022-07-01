


interface Camera{
    void take_snap();
    void record_video();
    private void greet(){
        System.out.println("greetings to all");
    }
    default void record_4k_video(){
        greet();
        System.out.println("recording in 4k") ;
    }
}


interface Wifi{
    public String[] get_network();
    public void connect_to_network (String network) ;
}

class Cell_phone{

    void call_number(int number) {
        System.out.println("calling - " + number ) ;
    }

    void pick_call() {
        System.out.println("connecting") ;
    }

}

class MySmartPhone extends Cell_phone implements Camera , Wifi {
    
    public void take_snap(){
        System.out.println("taking snap") ;
    }

    public void record_video(){
        System.out.println("recording video") ;
    }

    public void record_4k_video(){
        System.out.println("recording in 4k now") ;
    }

    public String[] get_network(){
        System.out.println("Getting list of networks") ;
        String[] network = { "shivam" , " gobi " , " aalu " , " lelo " } ;
        return network ;
    }

    public void connect_to_network(String network){
        System.out.println( network ) ;
    }

}

public class Java_interfaces{

    public static void main(String []args){

        MySmartPhone ms = new MySmartPhone(); 
        String []networks = ms.get_network();
        for( String s : networks){
            System.out.println(s);
        }
        ms.record_4k_video() ;
        // ms.greet();  --> throws an error private access.
    }
}