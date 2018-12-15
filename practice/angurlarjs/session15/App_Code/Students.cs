using System;
using System.Collections;
using System.Linq;
using System.Web;
using System.Web.Services;
using System.Web.Services.Protocols;
using System.Xml.Linq;
using System.Configuration;
using System.Data.SqlClient;
using System.Collections.Generic;
using System.Web.Script.Serialization;

/// <summary>
/// Summary description for Students
/// </summary>
[WebService(Namespace = "http://tempuri.org/")]
[WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
// To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
[System.Web.Script.Services.ScriptService]
public class Students : System.Web.Services.WebService
{

    public Students()
    {

        //Uncomment the following line if using designed components 
        //InitializeComponent(); 
    }

    [WebMethod]
    public void GetStudents()
    {
        List<Student> listStudent = new List<Student>();
        var connectionString = ConfigurationManager.ConnectionStrings["AngularJsDb"].ConnectionString;
        using (var connection = new SqlConnection(connectionString))
        {
            string command = "select * from SinhVien";
            SqlCommand sqlCommand = new SqlCommand(command, connection);
            connection.Open();
            SqlDataReader sqlDataReader = sqlCommand.ExecuteReader();
            Student student;
            while (sqlDataReader.Read())
            {
                student = new Student();
                student.msv = sqlDataReader["MSV"].ToString();
                student.hoTen = sqlDataReader["HoTen"].ToString();
                int intGioiTinh = Int32.Parse(sqlDataReader["GioiTinh"].ToString());
                if (intGioiTinh == 1)
                {
                    student.gioiTinh = "Nam";
                }
                else
                {
                    student.gioiTinh = "Nữ";
                }
                student.ngaySinh = sqlDataReader["NgaySinh"].ToString();
                student.sDT = sqlDataReader["SoDT"].ToString();
                student.email = sqlDataReader["Email"].ToString();
                student.maKhoa = sqlDataReader["makhoa"].ToString();
                listStudent.Add(student);
            }

        }
        JavaScriptSerializer javaScriptSerializer = new JavaScriptSerializer();
        Context.Response.Write(javaScriptSerializer.Serialize(listStudent));
    }

}

