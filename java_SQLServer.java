import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class SQLServerConnection {
    public static void main(String[] args) {
        Connection connection = null;
        try {
            // Load the SQL Server JDBC driver
            Class.forName("com.microsoft.sqlserver.jdbc.SQLServerDriver");

            // Create a connection to the database
            String url = "jdbc:sqlserver://localhost:1433;databaseName=mydatabase";
            String user = "myusername";
            String password = "mypassword";
            connection = DriverManager.getConnection(url, user, password);

            System.out.println("Connection successful.");

        } catch (ClassNotFoundException | SQLException e) {
            System.out.println("Connection failed: " + e.getMessage());
        } finally {
            try {
                if (connection != null) {
                    connection.close();
                }
            } catch (SQLException e) {
                System.out.println("Error closing connection: " + e.getMessage());
            }
        }
    }
}
