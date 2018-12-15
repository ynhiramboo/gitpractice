using System;
using System.Data;
using System.Configuration;
using System.Linq;
using System.Web;
using System.Web.Security;
using System.Web.UI;
using System.Web.UI.HtmlControls;
using System.Web.UI.WebControls;
using System.Web.UI.WebControls.WebParts;
using System.Xml.Linq;

/// <summary>
/// Summary description for Student
/// </summary>
public class Student
{
    public string msv { set; get; }
    public string hoTen { set; get; }
    public string gioiTinh { set; get; }
    public string ngaySinh { set; get; }
    public string sDT { set; get; }
    public string email { set; get; }
    public string maKhoa { set; get; }

	public Student()
	{
		//
		// TODO: Add constructor logic here
		//
	}
}
