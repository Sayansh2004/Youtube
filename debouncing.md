## Debouncing

It enhances the performance as suppose on flipkart user searches for something and each time API is called but if the user typing speed is less than debouncing then API call will not be made as when user types something fast then it is intentional that user knows what to he/she wants so it is waste and we can save API calls and not call API at that time.

so Debouncing with 200 ms 
-- If the difference between 2 key strokes is < 200ms then do not make an API call
-- else make an API call