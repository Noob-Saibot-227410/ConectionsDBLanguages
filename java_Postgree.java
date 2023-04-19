import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class PostgresConnection {
    public static void main(String[] args) {
        Connection connection = null;
        try {
            // Load the PostgreSQL JDBC driver
            Class.forName("org.postgresql.Driver");

            // Create a connection to the database
            String url = "jdbc:postgresql://localhost:5432/mydatabase";
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
