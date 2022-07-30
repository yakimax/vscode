class One{
    private int variable = 11 ;
    String s = "hello" ;
    private void print(String s){
        System.out.println(s) ;
    }
    private void print(String ss , String s){
        System.out.println( ss +" "+ s ) ;
    }
    void display(){
        System.out.println(variable) ;
    }
}
class Two extends One{
    private int variable = 33 ;
    String s = "bye" ;
    private void print(String s){
       System.out.println(s) ;
    }
}
    
class Polymorphism{ 
    public static void main(String[] args) {
        Two o = new Two() ;
        // o.variable;
        System.out.println("huh");
    }   
}