<template>
  <div
    class="dark:text-white ticket-container"
    style="
      position: center;
      top: 45px;
      left: 50%;
      width: 300px;
      background: white;
      border: 1px solid black;
    "
  >
    <div class="receipt-token" style="padding: 10px; text-align: center">
      <div style="display: flex; justify-content: center; align-items: center">
        <img src="@/assets/lpu.png" width="20" height="20" />
        <h4 style="font-size: 14px; margin: 1px 0">QUEUE MANAGEMENT SYSTEM</h4>
      </div>
      <h1 style="font-size: 21px; margin: 14px 0">
        <strong>{{ ticket[0].ticket }}</strong>
      </h1>
      <hr style="border-top: 1px dashed black; margin: 4px 0" />
      <ul class="list-unstyled" style="font-size: 12px; margin: 0; padding: 0">
        <li><strong>DEPARTMENT: </strong>{{ ticket[0].department }}</li>
        <li><strong>COUNTER: </strong>{{ ticket[0].counter }}</li>
        <li><strong>DATE: </strong>{{ formatDate(ticket[0].created_at) }}</li>
        <br />
        <li><strong>Your Transactions:</strong></li>
        <ul
          class="list-unstyled"
          style="font-size: 12px; margin: 0; padding: 0"
        >
          <template v-for="transaction in ticket">
            <li><strong>Student No.: </strong>{{ transaction.studentId }}</li>
            <li>{{ transaction.service }}</li>
          </template>
        </ul>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "TicketDisplay",
  props: {
    ticket: {
      type: Array,
    },
  },
  methods: {
    formatDate(date) {
      const formattedDate = new Date(date).toLocaleString();
      return formattedDate;
    },
  },
};
</script>
