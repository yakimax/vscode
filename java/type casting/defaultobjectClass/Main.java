class One {
    int a =1 ;
    void display(){
        System.out.println(a + " " +"hello class one") ;
    }
}

class Two extends One {
    int a =2;
    void display1(){
        System.out.println(a + " " + "hello class Two") ;
    }
}

class Main{
    public static void main(String[] args) {
        One t = new Two() ;
        Class c = t.getClass() ;
        String s = c.getName() ;
        t.display() ;
        System.out.println(s) ;
    }
}