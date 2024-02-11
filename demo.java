public class demo{
    public static void main(String[] args){
        int rows = 5;
        printnum(rows);
    }

    public static int printnum(int n){
        for (int i = 1; i <= n; i++) {
            System.out.println(" ");
        }

            for (int j = 1; j <= n; j++) {
                System.out.print("* ");
            }
            System.out.println();
            return n;

            
        }
        
    }
