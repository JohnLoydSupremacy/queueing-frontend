<script setup>
import Button from "../components/Button.vue";
import TicketDisplay from "../components/TicketDisplay.vue";
import FormLayout from "../views/FormLayout.vue";
</script>

<template>
  <FormLayout>
    <div id="ticket-display" style="text-align: -webkit-center">
      <TicketDisplay :ticket="ticket" />
    </div>
    <Button
      @click="print"
      class="mt-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-6/12 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      style="text-align: -webkit-center"
      >Print</Button
    >
  </FormLayout>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  data() {
    return {
      ticket: null,
    };
  },
  created() {
    const ticket = this.$store.getters.getTicket;
    this.ticket = ticket;
    this.setSection("TicketDisplayPage");
  },
  methods: {
    ...mapMutations(["clearState", "setSection"]),
    clearStateAction() {
      this.clearState();
    },

    print() {
      // const printContent = document.getElementById("ticket-display");
      // const originalContents = document.body.innerHTML;

      // document.body.innerHTML = printContent.innerHTML;
      // window.print();
      // document.body.innerHTML = originalContents;

      const printContent = document.getElementById("ticket-display").innerHTML;
      const printWindow = window.open("", "_blank", "width=600,height=600");

      printWindow.document.open();
      printWindow.document.write(printContent);
      printWindow.document.close();

      printWindow.print();
      // printWindow.close();
    },
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
  },
  components: {
    TicketDisplay,
  },
};
</script>
