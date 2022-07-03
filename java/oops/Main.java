package oops;
public class Main {
    
    public class Point{ 
        int x ;
        String y ;
    }

    public class vertex{
        Point tl ;
        Point tr ;
        Point bl ;
        Point br ;
        void print(){
            System.out.println( tl.x , tl.y , tr.x , tl.y , bl.x , bl.y , br.x , br.y ) ;
        }
    }
    public static void main(String[] args) {
        
    }
}
