import { Links } from "@/components/links";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur numquam magni fuga illum harum dolorum quas, maiores asperiores ad dolorem blanditiis nam sed quia dicta, dolores nesciunt mollitia alias eveniet.
      <Links />
      
      {children} ~
    </div>
  );
}

/**
 * Templates are similar to layouts in that they wrap each child layout or page.
 * Unlike layouts that persist across routes and maintain state, templates create a new instance for each of their children on navigation.
 * when a user navigates between routes that share a template, a new instance of the component is mounted, DOM elements are recreated, state is not preserved, and effects are re-synchronized.
 * 
 */
