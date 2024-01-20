import java.sql.*;

public class Main {
    public static void main(String[] args) {
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
        } catch (ClassNotFoundException e) {
            throw new IllegalStateException("Cannot find the driver!", e);
        }

        String url = "jdbc:mysql://localhost:85/campuschime";
        String username = "root";
        String password = "";

        try (Connection conn = DriverManager.getConnection(url, username, password)) {
            System.out.println("Connected to the database");
        } catch (SQLException e) {
            throw new IllegalStateException("Cannot connect to the database!", e);
        }
    }
}