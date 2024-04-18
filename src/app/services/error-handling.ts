import { MessageService } from 'primeng/api';
export function errorHandling(err: any, messageService: MessageService){
  console.log(err);
    if(err.error?.errors){
      for (var prop in err.error?.errors) {
        if (Object.prototype.hasOwnProperty.call(err.error?.errors, prop)) {
          messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: err.error?.errors[prop][0]
          });
        }
    }
    }else{
      messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Something went wrong'
      });
    }
}
