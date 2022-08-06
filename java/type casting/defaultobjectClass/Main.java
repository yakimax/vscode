class One {
    int a ;
    void display(){
        System.out.println("hello class one") ;
    }
}

class Two extends One {
    int a ;
    void display(){
        System.out.println("hello class one") ;
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