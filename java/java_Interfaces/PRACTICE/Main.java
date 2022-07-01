package PRACTICE;

class Main {
    
        public static int countDigitOne(int n) {
        if(n == 0) {
            return 0 ;
        }
        int count = 0 ;
        int num = n ;
        while(num != 0) {
            int digit = num % 10 ;
            num /= 10 ;
            if( digit == 1 ) {
                count++ ;
            }
        }
        count+= countDigitOne(n-1) ;
        return count ;
    }
        
	public static void main (String[] args) {
		System.out.println( countDigitOne (Integer.parseInt(args[0])));
	}
}
