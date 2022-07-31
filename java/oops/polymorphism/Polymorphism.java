class One{
    static{
        System.out.println("aalu le lo");
    }
    protected int variable = 11 ;
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
    private int sum( int a, int b ){
        System.out.println(a+b);
        return a+b ;
    }
    protected int sum( int a, int b,int c ){
        System.out.println(a+b+c);
        return a+b+c ;
    }
}
class Two extends One{
    private int variable = 33 ;
    String s = "bye" ;
    private void print(String s){
       System.out.println(s) ;
    }
    public int sum(int a, int b){
        System.out.println( "hello" +" " + (a + b) ) ;
        return a+b ;
    }
}
    
class Polymorphism{ 
    public static void main(String[] args) {
        One t = new One() ;
        // t.sum(1,4,5);
        
        System.out.println(t.variable);
    }   
}