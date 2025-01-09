import { Card, CardContent } from '../ui/card';

const About = () => (
  <section className="transition-opacity duration-300">
    <Card className="hover:shadow-lg transition-shadow duration-300">
      <CardContent className="p-8">
        <h2 className="text-3xl font-bold mb-6 text-indigo-600">About Me</h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          Enterprise architect with 26+ years of expertise building cloud-native solutions and leading development teams. 
          10+ years specialized in micro-frontends and cloud architecture.
          <br></br>
          <br></br>
          Proven track record of elevating codebases 
          and engineering practices while delivering complex solutions for enterprise clients.
        </p>
      </CardContent>
    </Card>
  </section>
);

export default About; 