<script setup>
import Button from "../components/Button.vue";
</script>

<template>
  <div class="dark:text-white">Ticket Display</div>
  <div class="dark:text-white ticket-container" style="position: center; top: 45px; left: 50%; width: 300px; background: white; border: 1px solid black;">
    <div class="receipt-token" style="padding: 10px; text-align: center;">
      <div style="display: flex; justify-content: center; align-items: center;">
        <img src="@/assets/lpu.png" width="20" height="20">
        <h4 style="font-size: 14px; margin: 1px 0;">QUEUE MANAGEMENT SYSTEM</h4>
      </div>
      <h1 style="font-size: 26px; margin: 14px 0;"><strong>" + data.token.token_no + "</strong></h1>
      <hr style="border-top: 1px dashed black; margin: 4px 0;">
      <ul class="list-unstyled" style="font-size: 12px; margin: 0; padding: 0;">
        <li><strong>Student No.: </strong>" + data.token.studentId + "</li>
        <li><strong>DEPARTMENT: </strong>" + data.token.department + "</li>
        <li><strong>TRANSACTION TYPE: </strong>" + data.transactionType.name + "</li>
        <li><strong>COUNTER: </strong>" + data.token.counter + "</li>
        <li><strong>DATE: </strong>" + data.token.created_at + "</li><br>
        <li><strong>Your Transactions:</strong></li>
        <ul class="list-unstyled" style="font-size: 12px; margin: 0; padding: 0;">
          <li>" + transactionContent + "</li>
        </ul>
      </ul>
    </div>
  </div>
  <router-link to="/">
    <Button @click="clearStateAction">Start Over</Button>
  </router-link>
  <Button @click="generatePDF">Print</Button>
</template>

<script>
import { mapMutations } from "vuex";
import jsPDF from 'jspdf'

export default {
  methods: {
    ...mapMutations(["clearState"]),
    clearStateAction() {
      this.clearState();
    },

    generatePDF() {
      // const studentClassMap = {
      //   F: 'Freshman',
      //   T: 'Transferee',
      //   CE: 'Cross-enrollee',
      //   SC: 'Second Course'
      // };

      const doc = new jsPDF();
      doc.text("Test", 100, 100);

      doc.save(`test_transcript.pdf`);
      // const jsonData = this.record;
      // const name = jsonData.name;
      // const program = jsonData.program;
      // const remarks = jsonData.remarks;
      // const activeStatus = jsonData.activeStatus === '1' ? 'Active' : 'Inactive';
      // const storageLocation = jsonData.storageLocation;
      // const studentClass = jsonData.studentClass;
      // const studentId = jsonData.studentId;
      // const requirements = jsonData.requirements;
      // const headerText = 'Student Profile';

      // const pageWidth = doc.internal.pageSize.getWidth();
      // const logoWidth = 150; // Adjust the width of the logo
      // const logoHeight = 30; // Adjust the height of the logo
      // const topMargin = 10;
      // const headerOffset = topMargin + logoHeight + 10;

      // // Load the logo
      // const headerLogoImg = new Image();
      // headerLogoImg.onload = () => {
      //   doc.addImage(headerLogoImg, 'PNG', (pageWidth - logoWidth) / 2, topMargin, logoWidth, logoHeight);

      //   doc.setFontSize(22);
      //   doc.setFont('helvetica', 'bold');
      //   const textWidth = doc.getStringUnitWidth(headerText) * doc.internal.getFontSize() / doc.internal.scaleFactor;
      //   const textOffset = (pageWidth - textWidth) / 2;
      //   doc.text(headerText, textOffset, headerOffset);

      //   doc.setFontSize(12);
      //   doc.setFont('helvetica', 'normal');

      //   // set label and value offsets
      //   const labelOffset = 10;
      //   const valueOffset = headerOffset + 10;

      //   // name label and value
      //   doc.text(`Name:`, labelOffset, valueOffset);
      //   doc.text(name, labelOffset + 30, valueOffset);

      //   // student id label and value
      //   doc.text(`Student ID:`, labelOffset, valueOffset + 10);
      //   doc.text(studentId, labelOffset + 30, valueOffset + 10);

      //   // program label and value
      //   doc.text(`Program:`, labelOffset, valueOffset + 20);
      //   doc.text(program, labelOffset + 30, valueOffset + 20);

      //   // active status label and value
      //   doc.text(`Active Status:`, labelOffset, valueOffset + 30);
      //   doc.text(activeStatus, labelOffset + 30, valueOffset + 30);

      //   // storage location label and value
      //   doc.text(`Storage Location:`, labelOffset, valueOffset + 40);
      //   doc.text(storageLocation, labelOffset + 35, valueOffset + 40);

      //   // student class label and value
      //   doc.text(`Student Class:`, labelOffset, valueOffset + 50);
      //   doc.text(studentClassMap.hasOwnProperty(studentClass) ? studentClassMap[studentClass] : studentClass, labelOffset + 30, valueOffset + 50);

      //   // remarks label and value
      //   const remarksText = remarks !== null && remarks !== undefined ? remarks : 'N/A';
      //   doc.text('Remarks:', labelOffset, valueOffset + 60);
      //   doc.setFontSize(10);
      //   const remarksLines = doc.splitTextToSize(remarksText, 150);
      //   let remarksYPos = valueOffset + 60;
      //   for (let i = 0; i < remarksLines.length; i++) {
      //     doc.setFontSize(10);
      //     doc.text(remarksLines[i], labelOffset + 30, remarksYPos);
      //     remarksYPos += 8;
      //   }

      //   // requirements label and values
      //   doc.setFontSize(12);
      //   doc.text(`Requirements:`, labelOffset, remarksYPos);
      //   let yPos = remarksYPos + 10;
      //   doc.setFontSize(10);
      //   requirements.forEach((requirement) => {
      //     console.log(requirement);
      //     const note = requirement.note;
      //     const isSubmitted = requirement.submitted === 1 ? 'Submitted' : 'Not Submitted';
      //     const reqName = requirement.name.toLowerCase().replace(/\b\w/g, l => l.toUpperCase()); // capitalize first letter of each word in requirement name
      //     const reqNameLines = doc.splitTextToSize(reqName, 80);
      //     doc.text(reqNameLines, labelOffset + 10, yPos, { fontSize: 12 });
      //     doc.text(isSubmitted, labelOffset + 100, yPos, { fontSize: 12 });

      //     if (note !== null && note !== undefined) {
      //       doc.text(note, labelOffset + 150, yPos, { fontSize: 12 });
      //     }

      //     yPos += 12; // only add 1 space between requirements
      //   });

      //   // Signed by
      //   const signedBy = `Signed by: ${jsonData.lastUser}`;
      //   doc.setFontSize(12);
      //   doc.text(signedBy, labelOffset, yPos + 20);

      //   doc.text("Test", 100, 100);

      //   doc.save(`test_transcript.pdf`);
      // };

      // headerLogoImg.src = headerLogoExport;
    }
  },
};
</script>
