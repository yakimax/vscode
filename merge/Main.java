package FJP.merge ;
import java.util.* ;
public class Main{
    public static void main(String[] args) {
        try (Scanner sc = new Scanner(System.in)) {
            int n = sc.nextInt();
            int arr[] = new int[n] ;
            for(int i = 0 ; i < n ; i++){
                arr[i] = sc.nextInt();
            }
            partition(arr,0,n-1);
        }
    }
    public static void partition(int arr[] , int start , int end){
        if(end < start){
            return ;
        }
        int mid = start + (end - start)/2 ;
        partition(arr,start ,mid);
        System.out.println(arr[start]);
        partition(arr,mid+1 ,end);

    }
    // public void merge(int arr[] , int start , int end){
        
    // }
}
