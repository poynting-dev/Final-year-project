import React from "react";

export default function Marksheet() {
  return (
    <div className="container p-4">
      <div>
        <table align="center" className="border-solid border-2">
          <tbody>
            <tr>
              <td valign="top" className="pl-3 pt-3">
                <img
                  src="https://custpostimages.s3.ap-south-1.amazonaws.com/5876/1613798237528.png"
                  style={{ width: "100px", height: "100px" }}
                />
              </td>
              <td
                valign="top"
                className="text-3xl text-center pt-3 border"
                colSpan={4}
              >
                Board of Technical Education UTTAR PRADESH <br /> LUCKNOW
              </td>
            </tr>
            <tr>
              <td
                colSpan="5"
                className="font-bold text-md text-center p-3 border"
              >
                ODD Semester Result December-2021
              </td>
            </tr>
            <tr>
              <td colSpan="5" className="font-bold text-md text-center border">
                Marks Sheet{" "}
              </td>
            </tr>
            <tr className="px-4">
              <td className="font-semibold text-left">Institute Name:</td>
              <td colSpan="4" align="left" className="printtext">
                MAHAMAYA POLYTECHNIC OF INFORMATION TECHNOLOGY ALIGARH CODE 1665
              </td>
            </tr>
            <tr>
              <td className="font-semibold text-left">Branch Name</td>
              <td colSpan="4" align="left" className="printtext">
                [955] [COMPUTER SCIENCE AND ENGINEERING] 05 Semster
              </td>
            </tr>
            <tr>
              <td className="font-semibold text-left">Student Name</td>
              <td colSpan="4" align="left" className="printtext">
                PRIYANSHU DIXIT
              </td>
            </tr>
            <tr>
              <td className="font-semibold text-left">Roll Number</td>
              <td colSpan="2" align="left" className="printtext">
                1995516655024
              </td>
            </tr>
            <tr>
              <td width="0" className="font-semibold text-left">
                Enrollment No.
              </td>
              <td width="0" align="left" className="printtext">
                E1666535500034
              </td>
            </tr>
            <tr>
              <td
                width="149"
                rowSpan="2"
                align="center"
                className="printtextbold"
              >
                Paper COde{" "}
              </td>
              <td width="530" rowSpan="2" className="printtextbold">
                &nbsp;Paper Name
              </td>
              <td
                colSpan="3"
                style={{ textAlign: "center" }}
                className="printtextbold"
              >
                MARKS
              </td>
            </tr>
            <tr>
              <td width="95" align="right" className="printtextbold">
                <div align="center">MAXIMUM Marks</div>
              </td>
              <td width="92" align="right" className="printtextbold">
                <div align="center">MINimum Marks</div>
              </td>
              <td width="143" className="printtextbold">
                <div align="center">Obtained Marks</div>
              </td>
            </tr>
            <tr>
              <td
                style={{ textAlign: "center", fontSize: "14px" }}
                className="printtextbold"
                colSpan="5"
              >
                Theory&nbsp;
              </td>
            </tr>

            <tr>
              <td
                className="printtext"
                style={{ textAlign: "center" }}
                valign="middle"
              >
                955501
              </td>
              <td className="printtext">
                INDUSTRIAL MANAGEMENT &amp; ENTREPRENEURSHIP DEVELOPMENT
              </td>
              <td className="printtext" style={{ textAlign: "center" }}>
                50{" "}
              </td>
              <td
                className="printtext"
                style={{ textAlign: "center" }}
                valign="middle"
              >
                <div align="center">17</div>
              </td>
              <td className="printtext" style={{ textAlign: "center" }}>
                <div align="center">33 </div>
              </td>
            </tr>

            <tr>
              <td
                className="printtext"
                style={{ textAlign: "center" }}
                valign="middle"
              >
                955502
              </td>
              <td className="printtext">DATA BASE MANAGEMENT SYSTEM</td>
              <td className="printtext" style={{ textAlign: "center" }}>
                50{" "}
              </td>
              <td
                className="printtext"
                style={{ textAlign: "center" }}
                valign="middle"
              >
                <div align="center">17</div>
              </td>
              <td className="printtext" style={{ textAlign: "center" }}>
                <div align="center">22 </div>
              </td>
            </tr>

            <tr>
              <td
                className="printtext"
                style={{ textAlign: "center" }}
                valign="middle"
              >
                955503
              </td>
              <td className="printtext">JAVA PROGRAMMING</td>
              <td className="printtext" style={{ textAlign: "center" }}>
                50{" "}
              </td>
              <td
                className="printtext"
                style={{ textAlign: "center" }}
                valign="middle"
              >
                <div align="center">17</div>
              </td>
              <td className="printtext" style={{ textAlign: "center" }}>
                <div align="center">24 </div>
              </td>
            </tr>

            <tr>
              <td
                className="printtext"
                style={{ textAlign: "center" }}
                valign="middle"
              >
                955504
              </td>
              <td className="printtext">E-COMMERCE</td>
              <td className="printtext" style={{ textAlign: "center" }}>
                50{" "}
              </td>
              <td
                className="printtext"
                style={{ textAlign: "center" }}
                valign="middle"
              >
                <div align="center">17</div>
              </td>
              <td className="printtext" style={{ textAlign: "center" }}>
                <div align="center">31 </div>
              </td>
            </tr>

            <tr>
              <td
                className="printtextbold"
                style={{ textAlign: "center", fontSize: "14px" }}
                colSpan="5"
              >
                Practical&nbsp;
              </td>
            </tr>

            <tr>
              <td
                className="printtext"
                style={{ textAlign: "center" }}
                valign="middle"
              >
                955521
              </td>
              <td className="printtext">DATA BASE MANAGEMENT SYSTEM</td>
              <td className="printtext" style={{ textAlign: "center" }}>
                60{" "}
              </td>
              <td
                className="printtext"
                style={{ textAlign: "center" }}
                valign="middle"
              >
                <div style={{ textAlign: "center" }}>24</div>
              </td>
              <td className="printtext" style={{ textAlign: "center" }}>
                <div style={{ textAlign: "center" }}>54 </div>
              </td>
            </tr>

            <tr>
              <td
                className="printtext"
                style={{ textAlign: "center" }}
                valign="middle"
              >
                955522
              </td>
              <td className="printtext">JAVA PROGRAMMING</td>
              <td className="printtext" style={{ textAlign: "center" }}>
                60{" "}
              </td>
              <td
                className="printtext"
                style={{ textAlign: "center" }}
                valign="middle"
              >
                <div style={{ textAlign: "center" }}>24</div>
              </td>
              <td className="printtext" style={{ textAlign: "center" }}>
                <div style={{ textAlign: "center" }}>52 </div>
              </td>
            </tr>

            <tr>
              <td
                className="printtextbold"
                style={{ textAlign: "center", fontSize: "14px" }}
                colSpan="5"
              >
                Sessional/Games/Discipline &nbsp;
              </td>
            </tr>

            <tr>
              <td
                className="printtext"
                style={{ textAlign: "center" }}
                valign="middle"
              >
                955551
              </td>
              <td className="printtext">SESSIONAL</td>
              <td className="printtext" style={{ textAlign: "center" }}>
                140{" "}
              </td>
              <td
                className="printtext"
                style={{ textAlign: "center" }}
                valign="middle"
              >
                <div style={{ textAlign: "center" }}>0</div>
              </td>
              <td className="printtext" style={{ textAlign: "center" }}>
                <div style={{ textAlign: "center" }}>122 </div>
              </td>
            </tr>

            <tr>
              <td
                className="printtext"
                style={{ textAlign: "center" }}
                valign="middle"
              >
                955552
              </td>
              <td className="printtext">GAMES</td>
              <td className="printtext" style={{ textAlign: "center" }}>
                15{" "}
              </td>
              <td
                className="printtext"
                style={{ textAlign: "center" }}
                valign="middle"
              >
                <div style={{ textAlign: "center" }}>0</div>
              </td>
              <td className="printtext" style={{ textAlign: "center" }}>
                <div style={{ textAlign: "center" }}>15 </div>
              </td>
            </tr>

            <tr>
              <td
                className="printtext"
                style={{ textAlign: "center" }}
                valign="middle"
              >
                955553
              </td>
              <td className="printtext">DISCIPLINE</td>
              <td className="printtext" style={{ textAlign: "center" }}>
                10{" "}
              </td>
              <td
                className="printtext"
                style={{ textAlign: "center" }}
                valign="middle"
              >
                <div style={{ textAlign: "center" }}>0</div>
              </td>
              <td className="printtext" style={{ textAlign: "center" }}>
                <div style={{ textAlign: "center" }}>10 </div>
              </td>
            </tr>

            <tr>
              <td
                align="center"
                className="printtextbold"
                valign="middle"
                colSpan="5"
                style={{ textAlign: "center", fontSize: "14px" }}
              >
                Result - Eligible for Next Semester{" "}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
{
  /*  
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<!-- saved from url=(0066)http://result.bteupexam.in/year/result.aspx?Roll_no=E1666535500034 -->
<html xmlns="http://www.w3.org/1999/xhtml"><head id="Head1"><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><title>

</title>
    <style type="text/css">
        #background {
            position: absolute;
            z-index: 0;
            display: block;
            min-height: 80%;
            min-width: 130%;
        }

        #content {
            position: absolute;
            z-index: 1;
        }

        #bg-text {
            opacity: 0.2;
            font-size: 120px;
            transform: rotate(290deg);
            -webkit-transform: rotate(290deg);
        }
    </style>


    <link href="./result_files/style.css" rel="stylesheet" type="text/css"><link href="./result_files/noprint.css" rel="stylesheet" type="text/css" media="print">
    <style type="text/css">
         

        .printtextbu {
            border-right: 1px solid #999999;
            border-bottom: 1px solid #999999;
            padding: 5px;
            font-family: verdana;
            font-size: 11px;
            textAlign: left;
            font-weight: bold;
            text-decoration: underline;
        }
   */
}
